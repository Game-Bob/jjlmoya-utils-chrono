import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { chronoCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(5);
    });


    it('chronoCategory should be defined', () => {
      expect(chronoCategory).toBeDefined();
      expect(chronoCategory.i18n).toBeDefined();
    });
  });
});

